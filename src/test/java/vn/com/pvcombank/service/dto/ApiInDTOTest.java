package vn.com.pvcombank.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class ApiInDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(ApiInDTO.class);
        ApiInDTO apiInDTO1 = new ApiInDTO();
        apiInDTO1.setId(1L);
        ApiInDTO apiInDTO2 = new ApiInDTO();
        assertThat(apiInDTO1).isNotEqualTo(apiInDTO2);
        apiInDTO2.setId(apiInDTO1.getId());
        assertThat(apiInDTO1).isEqualTo(apiInDTO2);
        apiInDTO2.setId(2L);
        assertThat(apiInDTO1).isNotEqualTo(apiInDTO2);
        apiInDTO1.setId(null);
        assertThat(apiInDTO1).isNotEqualTo(apiInDTO2);
    }
}
