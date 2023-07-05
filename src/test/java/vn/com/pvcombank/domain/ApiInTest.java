package vn.com.pvcombank.domain;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class ApiInTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ApiIn.class);
        ApiIn apiIn1 = new ApiIn();
        apiIn1.setId(1L);
        ApiIn apiIn2 = new ApiIn();
        apiIn2.setId(apiIn1.getId());
        assertThat(apiIn1).isEqualTo(apiIn2);
        apiIn2.setId(2L);
        assertThat(apiIn1).isNotEqualTo(apiIn2);
        apiIn1.setId(null);
        assertThat(apiIn1).isNotEqualTo(apiIn2);
    }
}
