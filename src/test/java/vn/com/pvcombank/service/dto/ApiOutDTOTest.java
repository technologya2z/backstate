package vn.com.pvcombank.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class ApiOutDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(ApiOutDTO.class);
        ApiOutDTO apiOutDTO1 = new ApiOutDTO();
        apiOutDTO1.setId(1L);
        ApiOutDTO apiOutDTO2 = new ApiOutDTO();
        assertThat(apiOutDTO1).isNotEqualTo(apiOutDTO2);
        apiOutDTO2.setId(apiOutDTO1.getId());
        assertThat(apiOutDTO1).isEqualTo(apiOutDTO2);
        apiOutDTO2.setId(2L);
        assertThat(apiOutDTO1).isNotEqualTo(apiOutDTO2);
        apiOutDTO1.setId(null);
        assertThat(apiOutDTO1).isNotEqualTo(apiOutDTO2);
    }
}
