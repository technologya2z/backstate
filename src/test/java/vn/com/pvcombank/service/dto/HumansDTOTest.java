package vn.com.pvcombank.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class HumansDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(HumansDTO.class);
        HumansDTO humansDTO1 = new HumansDTO();
        humansDTO1.setId(1L);
        HumansDTO humansDTO2 = new HumansDTO();
        assertThat(humansDTO1).isNotEqualTo(humansDTO2);
        humansDTO2.setId(humansDTO1.getId());
        assertThat(humansDTO1).isEqualTo(humansDTO2);
        humansDTO2.setId(2L);
        assertThat(humansDTO1).isNotEqualTo(humansDTO2);
        humansDTO1.setId(null);
        assertThat(humansDTO1).isNotEqualTo(humansDTO2);
    }
}
